package com.example.data1700oblig1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinobillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett (Kinobillett billett){
        String sql = "INSERT INTO Kinobillett (film,antall,fornavn,etternavn,telefon,epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(),
                billett.getEtternavn(), billett.getTelefon(), billett.getEpost());
    }

    public List<Kinobillett> hentBilletter() {
        String sql = "SELECT * FROM Kinobillett";
        List<Kinobillett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Kinobillett.class));
        return alleBilletter;
    }

    public void slettBilletter(){
        String sql = "DELETE * FROM Kinobillett";
        db.update(sql);
    }

}
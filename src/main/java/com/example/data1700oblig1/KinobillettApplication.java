package com.example.data1700oblig1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@SpringBootApplication
@RestController

public class KinobillettApplication {
    @Autowired
    KinobillettRepository rep;

    //private final List<Kinobillett> billettRegistering = new ArrayList<>();



    // Endepunkt for å registrere en ny kinobillettbestilling
    /*@PostMapping("/registrer")
    public void lagreBillettFraInput(@RequestBody Kinobillett kinobillett) {
        billettRegistering.add(kinobillett);@
    }*/
    @RequestMapping(value = "/lagre", method = RequestMethod.POST)
    public void lagreBillett (@RequestBody Kinobillett innBillett){rep.lagreBillett(innBillett);}
    @GetMapping("/hentKinobillett")
    public List<Kinobillett> hentAlleKinobilletter() {
        return  rep.hentBilletter();
    }
    @PostMapping("/hentKinobillettFraDb")
    public Kinobillett hentKinobillettFraDb(@RequestParam Long id){return rep.hentFraId(id);}
    @PostMapping("/oppdaterBillett")
    public void oppdaterBillettIDB(@RequestBody Kinobillett kinobillett) {
        rep.oppdaterBillett(kinobillett);
    }
    @DeleteMapping("/slettBillett")
    public String slettBillett(@RequestParam Long id) {
         rep.slettBillett(id);
        return "Slettet";
    }
    // Endepunkt for å slette alle kinobillettbestillinger
    /*@DeleteMapping("/slettBestillinger")
    public void slettAlleBestillinger() {
        billettRegistering.clear();
    }*/
    public static void main(String[] args) {
        SpringApplication.run(KinobillettApplication.class, args);
    }
}

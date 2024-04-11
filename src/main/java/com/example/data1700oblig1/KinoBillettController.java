package com.example.data1700oblig1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


    @RestController
    public class KinoBillettController {
        @Autowired
        KinobillettRepository rep;

        @PostMapping("/lagre")
        public void lagreBillet(Kinobillett innBillett) {
            rep.lagreBillett(innBillett);
        }

        @GetMapping("/hentAlle")
        public List<Kinobillett> hentAlle() {
            return rep.hentBilletter();
        }

        @GetMapping("/slettAlle")
        public void slettAlle() {
            rep.slettBilletter();
        }
    }

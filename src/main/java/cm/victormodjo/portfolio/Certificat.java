package cm.victormodjo.portfolio;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "Diplome")
public class Certificat {

    @Id
    private String id;
    private LocalDate date;

    public Certificat(LocalDate now) {
    }
}

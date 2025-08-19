package cm.victormodjo.portfolio;

import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class Service {

    private final DiplomeRepository diplomeRepository;

    public void createDocument() {
        diplomeRepository.save(new Certificat(LocalDate.now()));
    }
}

package cm.victormodjo.portfolio.repository;

import cm.victormodjo.portfolio.entity.Certificate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CertificateRepository extends MongoRepository<Certificate, String> {
}

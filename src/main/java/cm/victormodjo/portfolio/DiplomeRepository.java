package cm.victormodjo.portfolio;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiplomeRepository extends MongoRepository<Certificat, String> {
}

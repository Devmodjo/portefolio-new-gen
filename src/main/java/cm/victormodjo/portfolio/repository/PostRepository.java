package cm.victormodjo.portfolio.repository;

import cm.victormodjo.portfolio.entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends MongoRepository<Post, String> {
}

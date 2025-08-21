package cm.victormodjo.portfolio.service.serviceimpl;

import cm.victormodjo.portfolio.dto.PostRequest;
import cm.victormodjo.portfolio.dto.PostResponse;
import cm.victormodjo.portfolio.entity.Post;
import cm.victormodjo.portfolio.exception.ResourceNotFoundException;
import cm.victormodjo.portfolio.repository.PostRepository;
import cm.victormodjo.portfolio.service.PostService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public PostResponse createPost(PostRequest postRequest) {
        var saved = postRepository.save(new Post(null, postRequest.title(), postRequest.excerpt(), postRequest.content(), postRequest.category(), postRequest.author(), postRequest.publishedAt(), postRequest.image(), postRequest.tag()));
        return new PostResponse(saved.getId(), saved.getTitle(), saved.getExcerpt(), saved.getContent(), saved.getCategory(), saved.getAuthor(), saved.getPublishedAt(), saved.getImage(), saved.getTag());
    }

    @Override
    public List<PostResponse> retrievePost() {
        List<PostResponse> list = new ArrayList<>();
        postRepository.findAll().forEach(el -> {
            list.add(new PostResponse(
                    el.getId(), el.getTitle(), el.getExcerpt(), el.getContent(), el.getCategory(), el.getAuthor(), el.getPublishedAt(), el.getImage(), el.getTag()
            ));
        });
        return list;
    }

    @Override
    public PostResponse updatePost(String id, PostRequest postRequest) {
        Optional<Post> found = postRepository.findById(id);
        if (found.isPresent()) {
            Post p = found.get();
            p.setTitle(postRequest.title());
            p.setExcerpt(postRequest.excerpt());
            p.setContent(postRequest.content());
            p.setCategory(postRequest.category());
            p.setPublishedAt(postRequest.publishedAt());
            p.setImage(postRequest.image());
            p.setTag(postRequest.tag());

            var up = postRepository.save(p);

            return new PostResponse(up.getId(), up.getTitle(), up.getExcerpt(), up.getContent(), up.getCategory(), up.getAuthor(), up.getPublishedAt(), up.getImage(), up.getTag());
        }
        throw new ResourceNotFoundException("ce post n'existe pas !");
    }

    @Override
    public Boolean deletePost(String id) {
        Optional<Post> found = postRepository.findById(id);
        if (found.isPresent()) {
            postRepository.delete(found.get());
            return true;
        }
        throw new ResourceNotFoundException("ce post n'existe pas");
    }
}

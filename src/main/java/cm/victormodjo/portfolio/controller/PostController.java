package cm.victormodjo.portfolio.controller;

import cm.victormodjo.portfolio.dto.PostRequest;
import cm.victormodjo.portfolio.dto.PostResponse;
import cm.victormodjo.portfolio.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/post")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/create")
    public ResponseEntity<PostResponse> createPost(@RequestBody PostRequest postRequest) {
        return ResponseEntity.ok(
                postService.createPost(postRequest)
        );
    }
}

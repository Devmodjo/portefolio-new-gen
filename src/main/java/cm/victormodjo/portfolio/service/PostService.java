package cm.victormodjo.portfolio.service;

import cm.victormodjo.portfolio.dto.PostRequest;
import cm.victormodjo.portfolio.dto.PostResponse;

import java.util.List;

public interface PostService {

    PostResponse createPost(PostRequest postRequest);

    List<PostResponse> retrievePost();

    PostResponse updatePost(String id, PostRequest postRequest);

    Boolean deletePost(String id);
}

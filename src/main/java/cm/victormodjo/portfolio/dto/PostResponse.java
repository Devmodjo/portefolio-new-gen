package cm.victormodjo.portfolio.dto;

import java.time.LocalDate;
import java.util.List;

public record PostResponse(
        String id,
        String title,
        String excerpt,
        String content,
        String category,
        String author,
        LocalDate publishedAt,
        String image,
        List<String> tag
) {
}

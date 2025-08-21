package cm.victormodjo.portfolio.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "certificate")
public class Certificate {

    @Id
    private String id;
    private String name;
    private String description;
    private String image;
    private String source;

    public Certificate() {
    }

    public Certificate(String id, String name, String description, String image, String source) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.source = source;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
}

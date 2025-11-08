package Live_video.Streaming.model;

import jakarta.persistence.*; // new versions use jakarta.persistence

@Entity
@Table(name = "live_sessions")
public class LiveSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private String uniqueId;
    private String userurl;

    // 👇 Getters & Setters (Right click → Generate → Getter & Setter)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
    }

    public String getUserurl() {
        return userurl;
    }

    public void setUserurl(String userurl) {
        this.userurl = userurl;
    }
}

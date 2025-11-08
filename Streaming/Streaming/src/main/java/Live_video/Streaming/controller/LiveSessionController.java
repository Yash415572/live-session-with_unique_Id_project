package Live_video.Streaming.controller;

import Live_video.Streaming.model.LiveSession;
import Live_video.Streaming.repository.LiveSessionRepository;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // for React frontend
public class LiveSessionController {

    private final LiveSessionRepository repo;

    public LiveSessionController(LiveSessionRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/sessions")
    public LiveSession createSession() {
        String uniqueId = UUID.randomUUID().toString();
        String userUrl = "http://localhost:3000/session/" + uniqueId;

        LiveSession session = new LiveSession();
        session.setType("admin");
        session.setUniqueId(uniqueId);
        session.setUserurl(userUrl);

        repo.save(session);
        return session;
    }

    @GetMapping("/sessions/{uniqueId}")
    public LiveSession getSession(@PathVariable String uniqueId) {
        return repo.findByUniqueId(uniqueId).orElse(null);
    }
}

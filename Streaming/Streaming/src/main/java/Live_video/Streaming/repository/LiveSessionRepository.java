package Live_video.Streaming.repository;

import Live_video.Streaming.model.LiveSession;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface LiveSessionRepository extends JpaRepository<LiveSession, Long> {
    Optional<LiveSession> findByUniqueId(String uniqueId);
}

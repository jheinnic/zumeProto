package name.jchein.demo.zumepizza.common.test;

import java.util.concurrent.CompletableFuture;

public interface Producer<T> {
  public CompletableFuture<T> produce();
}

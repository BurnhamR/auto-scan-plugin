/*
 * Enabled scanning automatically
 *
 * License: MIT
 * Copyright (c) 2023 Stanislav Lechev [0xAF], LZ2SLL
 */
Plugins.scan.no_css = true;
Plugins.scan.init = function () {
  $(document).on('event:owrx_initialized', function () {
    if(!scanner.isRunning()) toggleScanner();
    return true;
  });
}

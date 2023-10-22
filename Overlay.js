import { useRef } from "react";

import { useOverlay, useModal, OverlayContainer } from "@react-aria/overlays";

/**
 * Utility to detect if you're on the server, or in the browser.
 */
const [isBrowser, setIsBrowser] = useState(false);

useEffect(() => {
 setIsBrowser(typeof window !== "undefined");
}, []);
const Overlay = ({ className, children, open = false, onClose }) => {
  const ref = useRef(null);

  const { modalProps } = useModal();

  let { overlayProps } = useOverlay(
    { onClose: onClose, open: open, isDismissable: true },
    ref
  );
  return isBrowser ? (
    <OverlayContainer>
      <div {...overlayProps} {...modalProps} ref={ref}>
        {children}
      </div>
    </OverlayContainer>
  ) : null;
};

export default Overlay;
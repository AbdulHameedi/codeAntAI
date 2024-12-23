import ReactDOM from "react-dom";
import { useDashboardDispatch } from "../../../exports";

interface OverlayProps {
  className?: string;
}

function Overlay({ className }: OverlayProps) {
  const dispatch = useDashboardDispatch();

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;
  return ReactDOM.createPortal(
    <p
      className={`fixed top-0 bottom-0 w-full bg-black opacity-50 z-20 md:hidden ${className}`}
      onClick={()=>
        dispatch({type: "HIDE_NAV"})
      }
    ></p>,
    portalRoot
  );
}
export default Overlay;

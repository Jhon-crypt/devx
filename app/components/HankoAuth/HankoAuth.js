"use client";
 
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register} from "@teamhanko/hanko-elements";

if (typeof window !== 'undefined' && typeof window.CustomEvent !== 'function') {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

 
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export default function HankoAuth() {
  const router = useRouter();
 
  const [hanko, setHanko] = useState(null);
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);
 
  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/Portfolio");
  }, [router]);
 
  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );
 
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log(error)
    });
  }, []);
 
  return <hanko-auth />;
}

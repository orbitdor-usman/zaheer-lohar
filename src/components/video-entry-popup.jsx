"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/shadcn-dialog";

const SKIP_DELAY_SECONDS = 5;
const VIDEO_URL =
  "https://www.youtube.com/embed/AJccYTwF0M8?si=hDfqlAzT-HlJRXuu&autoplay=1&mute=1&playsinline=1&rel=0";

function VideoEntryDialog() {
  const [open, setOpen] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(SKIP_DELAY_SECONDS);
  const titleRef = useRef(null);
  const previousFocusRef = useRef(null);
  const canClose = secondsRemaining === 0;

  useEffect(() => {
    if (!open) return;

    // A deadline keeps the countdown accurate when background timers are throttled.
    const deadline = Date.now() + SKIP_DELAY_SECONDS * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsRemaining(remaining);
      if (remaining === 0) window.clearInterval(timer);
    }, 250);

    return () => window.clearInterval(timer);
  }, [open]);

  function handleOpenChange(nextOpen) {
    if (!nextOpen && canClose) setOpen(false);
  }

  function preventEarlyDismiss(event) {
    if (!canClose) event.preventDefault();
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        onEscapeKeyDown={preventEarlyDismiss}
        onInteractOutside={preventEarlyDismiss}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          previousFocusRef.current = document.activeElement;
          titleRef.current?.focus();
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          if (previousFocusRef.current?.isConnected) previousFocusRef.current.focus();
        }}
      >
        <div className="flex items-start justify-between gap-4 p-4 sm:p-6">
          <div className="min-w-0 space-y-2">
            <DialogTitle ref={titleRef} tabIndex={-1} className="outline-none">
              Welcome to Zaheer Lohar
            </DialogTitle>
            <DialogDescription>
              Playback starts muted. Turn on sound using the player controls.
            </DialogDescription>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-11 shrink-0 rounded-full"
            disabled={!canClose}
            aria-label="Close video popup"
            onClick={() => handleOpenChange(false)}
          >
            <X aria-hidden="true" />
          </Button>
        </div>

        {open && (
          <iframe
            src={VIDEO_URL}
            title="Zaheer Lohar featured YouTube video"
            width="560"
            height="315"
            className="block h-auto min-h-[200px] w-full aspect-video border-0 bg-black"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="m-0 text-sm text-muted-foreground" role="status" aria-live="polite" aria-atomic="true">
            {canClose
              ? "You can skip or close the video now."
              : `You can skip in ${secondsRemaining} ${secondsRemaining === 1 ? "second" : "seconds"}.`}
          </p>
          <Button
            type="button"
            className="min-h-11 w-full px-5 sm:w-auto"
            disabled={!canClose}
            onClick={() => handleOpenChange(false)}
          >
            Skip video
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function VideoEntryPopup() {
  const [visit, setVisit] = useState(0);

  useEffect(() => {
    // Back/forward cache restores the document without remounting the site layout.
    function handlePageShow(event) {
      if (event.persisted) setVisit((currentVisit) => currentVisit + 1);
    }

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return <VideoEntryDialog key={visit} />;
}

"use client";

import { toast } from "sonner";
import { Globe, Link2, Lock } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareProps {
  boardId: string;
};

export const Share = ({
  boardId,
}: ShareProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  const { mutate, pending } = useApiMutation(api.board.setPublic);

  const isPublic = (data as any)?.isPublic === true;

  const onCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${boardId}`,
    )
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
  };

  const onTogglePublic = () => {
    if (!data) return;

    mutate({ id: boardId, isPublic: !isPublic })
      .then(() => toast.success(isPublic ? "Board is now private" : "Board is now public - anyone with link can join"))
      .catch(() => toast.error("Failed to update share settings"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="board" size="sm" className="gap-2">
          {isPublic ? <Globe className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-80 p-4 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-sm font-medium">
            {isPublic ? "Anyone with link can join" : "Only org members can join"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {isPublic
              ? "No org invite needed. User still needs to sign in."
              : "Turn on public link to skip org invites for demos."}
          </p>
        </div>
        <Button
          onClick={onCopyLink}
          variant="outline"
          className="w-full justify-start"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </Button>
        <Button
          onClick={onTogglePublic}
          disabled={pending || !data}
          className="w-full"
        >
          {isPublic ? "Make private" : "Create share link"}
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

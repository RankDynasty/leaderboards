import { ClanHeader } from "@/components/clan/ClanHeader";
import { MembersGrid } from "@/components/clan/MembersGrid";

export default function ClanHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <ClanHeader />
      <MembersGrid />
    </div>
  );
}

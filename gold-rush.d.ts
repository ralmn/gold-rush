interface FactionPublic {
  id: string;
  rulers: { id: string; displayName: string; }[];
  settlements: SettlementPublic[];
}

interface SettlementPublic {
  id: string;
  name: string;

  settlers: number;
}

interface UserPrivate {
  passwordHash: string;
}

interface UserPublic {
  id: string;
  displayName: string;
  factionId: string;
}

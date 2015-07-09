let gameData: {
  pub?: {
    user: UserPublic,
    faction: FactionPublic
  };
  
  settlementsById?: { [id: string]: SettlementPublic };
} = {};

export default gameData;

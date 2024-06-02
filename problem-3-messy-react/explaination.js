// Since I am not yet know how to code with typescript, these are all the problems that I can find

//Problem 1:
//I don't know much about typescript but "blockchain: any" makes me have a bad feeling, I think blockchain parameter in getPriority should not use "any". Instead, a specific type should be used to ensure type safety and I don't see blockchain was declared in WalletBalance or FormattedWalletBalance so I am not sure is it correct
const getPriority = (blockchain: any): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa":
      return 20;
    case "Neo":
      return 20;
    default:
      return -99;
  }
};

//Improvement for getPriority
const getPriorityImprovement = (blockchain: string): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa":
      return 20;
    case "Neo":
      return 20;
    default:
      return -99;
  }
};

/////////////////////////////////////////////////////////////////////////////////

//Problem 2: this function have 3 problems:
// 1. The filtering logic within useMemo is incorrect. The check lhsPriority > -99 is not defined correctly as lhsPriority is not declared within the scope.
// 2. Filtering balances with amounts less than or equal to zero should be combined with the priority check for efficiency.
// 3. The useMemo hook should only depend on balances, not prices, because prices are not used in the filtering and sorting logic.
const sortedBalances = useMemo(() => {
  return balances
    .filter((balance: WalletBalance) => {
      const balancePriority = getPriority(balance.blockchain);
      if (lhsPriority > -99) {
        if (balance.amount <= 0) {
          return true;
        }
      }
      return false;
    })
    .sort((lhs: WalletBalance, rhs: WalletBalance) => {
      const leftPriority = getPriority(lhs.blockchain);
      const rightPriority = getPriority(rhs.blockchain);
      if (leftPriority > rightPriority) {
        return -1;
      } else if (rightPriority > leftPriority) {
        return 1;
      }
    });
}, [balances, prices]);

//Improvement for sortedBalances
const sortedBalancesImprovement = useMemo(() => {
  return balances
    .filter(
      (balance: WalletBalance) =>
        balance.amount > 0 && getPriority(balance.blockchain) > -99
    )
    .sort(
      (lhs: WalletBalance, rhs: WalletBalance) =>
        getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
    );
}, [balances]);

//////////////////////////////////////////////////////////////////////////

//Problem 3: this function was created but never be used, we should remove it
const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
  return {
    ...balance,
    formatted: balance.amount.toFixed(),
  };
});
///////////////////////////////////////////////////

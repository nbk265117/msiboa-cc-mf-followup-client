
export const transactions:any = [
  { ribBeneficiary: '1235455121414864563', motif: 'BOA MALI', date: '02-04-2022', montant:'3000 MAD' },
  { ribBeneficiary: '0005455121414864563', motif: 'BOA', date: '02-04-2022', montant:'2000 MAD' },
  { ribBeneficiary: '9995455121414864563', motif: 'BOA SENEGAL', date: '05-04-2022', montant:'250 MAD' },
  { ribBeneficiary: '6665455121414864563', motif: 'BOA MALI', date: '01-04-2022', montant:'460 MAD' },
  { ribBeneficiary: '1115455121414864563', motif: 'cccccc', date: '04-04-2022', montant:'6000 MAD' },
  { ribBeneficiary: '2305455121414864563', motif: 'BOA', date: '02-01-2022', montant:'3000 MAD' },
  { ribBeneficiary: '4445455121414864563', motif: 'cccccc', date: '02-02-2022', montant:'200 MAD' },
  { ribBeneficiary: '1235455121414864563', motif: 'cccccc', date: '02-03-2022', montant:'3400 MAD' },
  { ribBeneficiary: '5555455121414864563', motif: 'cccccc', date: '02-01-2022', montant:'3000 MAD' },
];

export const clients= [
  {
  id:1,
  name: 'Yassine Ahmedi',
  rib: '12300000000000000',
  solde: 220000.00,
  operations :getMultipleRandom(transactions,5)
},
  {
    id:2,
    name: 'Kamal Kamal',
    rib: '12311111111111111',
    solde: 30000.00,
    operations :getMultipleRandom(transactions,6)
  },
  {
    id:3,
    name: 'Ahmed Romani',
    rib: '12322222222222222',
    solde: 5000000,
    operations :getMultipleRandom(transactions,3),
  },
  {
    id:4,
    name: 'Fatima Zrikem',
    rib: '12333333333333333',
    solde: 8000.00,
    operations :getMultipleRandom(transactions,7)
  },
  {
    id:5,
    name: 'Omar Ahjam',
    rib: '12344444444444444',
    solde: 22.00,
    operations :transactions
  }];

export function getMultipleRandom(arr: any,num:number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


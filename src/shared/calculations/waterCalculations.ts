import { UserEntity } from "src/user/user.entity";

export const ammoniaCalculation = (ammonia: Number, user:UserEntity): string => {
  if (ammonia > 0) {
    return 'This must be lowered to 0 immediately! Change water and use a product like Seachem Safe.';
  } else if (ammonia < 0) {
    return 'Ammonia cannot be a negative value.';
  }
  return 'Perfect. Ammonia should always be 0.';
};

export const nitriteCalculation = (nitrite: Number): string => {
  if (nitrite > 0) {
    return 'This must be lowered to 0 immediately! Change water out.';
  } else if (nitrite < 0) {
    return 'Nitrite cannot be a negative value.';
  }
  return 'Great. Nitrite should always be 0.';
};

export const nitrateCalculation = (nitrate: Number): string => {
  if (nitrate > 0 && nitrate <= 5) {
    return 'This is the ideal range to maintain coral health and colour.';
  } else if (nitrate < 0) {
    return 'Nitrate cannot be a negative value.';
  }
  return 'Maintaining nitrate at 0 can be dangerous.';
};

export const phosphateCalculation = (phosphate: Number): string => {
  if (phosphate > 0 && phosphate <= 0.01) {
    return 'This is the ideal range to maintain coral health and colour.';
  } else if (phosphate < 0) {
    return 'Phosphate cannot be a negative value.';
  } else if (phosphate > 0.01) {
    return 'This is too high, ideal phosphate levels are less than 0.01 PPM';
  }
  return 'Maintaining phosphate at 0 can be dangerous.';
};

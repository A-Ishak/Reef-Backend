import e from 'express';
import { UserEntity } from 'src/user/user.entity';
import {
  CreateWaterSampleDTO,
  OptimisedWaterParametersDTO,
  waterSampleDto,
} from 'src/waterSamples/water-sample.dto';
import {
  fowlrIdealParameters,
  softiesIdealParameters,
  lpsIdealParameters,
  mixedIdealParameters,
  spsIdealParameters,
} from './idealParameters';

// How will it work
// Lets apply weights to important parameters

export const paramaterAlgorithm = (
  latestWaterSample: waterSampleDto,
): OptimisedWaterParametersDTO => {
  const optimisedWaterParameters = new OptimisedWaterParametersDTO();

  if (latestWaterSample.ammonia === 0) {
    optimisedWaterParameters.ammonia = 'Perfect';
  } else {
    optimisedWaterParameters.ammonia =
      'Ammonia must be lowered to zero immediately!';
  }
  if (latestWaterSample.nitrite === 0) {
    optimisedWaterParameters.nitrite = 'Perfect';
  } else {
    optimisedWaterParameters.nitrite =
      'Nitrite must be lowered to zero immediately!';
  }
  if (
    latestWaterSample.nitrate <= fowlrIdealParameters.nitrateUpper &&
    latestWaterSample.nitrate > 0
  ) {
    optimisedWaterParameters.nitrate = 'Keep your nitrate around this level';
  } else {
    if (latestWaterSample.nitrate === 0) {
      optimisedWaterParameters.nitrate =
        'It is beneficial to coral to have a little bit of detectable nitrate';
    } else {
      optimisedWaterParameters.nitrate = `Lower your nitrate to be at or below ${fowlrIdealParameters.nitrateUpper}ppm`;
    }
  }
  if (latestWaterSample.phosphate === 0) {
    optimisedWaterParameters.phosphate =
      'You should not let phosphate bottom out in your system';
  } else if (
    latestWaterSample.phosphate > fowlrIdealParameters.phosphateUpper
  ) {
    optimisedWaterParameters.phosphate = `Lower your phosphate to be at or below ${fowlrIdealParameters.phosphateUpper}`;
  } else {
    optimisedWaterParameters.phosphate = `${latestWaterSample.phosphate} is a good level to keep your phosphate at`;
  }
  if (
    latestWaterSample.temperature < 24 ||
    latestWaterSample.temperature > 27
  ) {
    optimisedWaterParameters.temperature =
      'The ideal temperature for a saltwater aquarium is 24-27 degrees celsius';
  } else {
    optimisedWaterParameters.temperature = `${latestWaterSample.temperature} is a good temperature for your aquarium`;
  }
  if (latestWaterSample.salinity > 1.026 || latestWaterSample.salinity < 1.02) {
    optimisedWaterParameters.salinity =
      'Maintain salinity between 1.020-1.026 in a fowlr ';
  } else {
    optimisedWaterParameters.salinity =
      'This salinity is in a good range for your tank';
  }
  return optimisedWaterParameters;
};



// export const ammoniaCalculation = (ammonia: Number, user:UserEntity): string => {
//   if (ammonia > 0) {
//     return 'This must be lowered to 0 immediately! Change water and use a product like Seachem Safe.';
//   } else if (ammonia < 0) {
//     return 'Ammonia cannot be a negative value.';
//   }
//   return 'Perfect. Ammonia should always be 0.';
// };

// export const nitriteCalculation = (nitrite: Number): string => {
//   if (nitrite > 0) {
//     return 'This must be lowered to 0 immediately! Change water out.';
//   } else if (nitrite < 0) {
//     return 'Nitrite cannot be a negative value.';
//   }
//   return 'Great. Nitrite should always be 0.';
// };

// export const nitrateCalculation = (nitrate: Number): string => {
//   if (nitrate > 0 && nitrate <= 5) {
//     return 'This is the ideal range to maintain coral health and colour.';
//   } else if (nitrate < 0) {
//     return 'Nitrate cannot be a negative value.';
//   }
//   return 'Maintaining nitrate at 0 can be dangerous.';
// };

// export const phosphateCalculation = (phosphate: Number): string => {
//   if (phosphate > 0 && phosphate <= 0.01) {
//     return 'This is the ideal range to maintain coral health and colour.';
//   } else if (phosphate < 0) {
//     return 'Phosphate cannot be a negative value.';
//   } else if (phosphate > 0.01) {
//     return 'This is too high, ideal phosphate levels are less than 0.01 PPM';
//   }
//   return 'Maintaining phosphate at 0 can be dangerous.';
// };

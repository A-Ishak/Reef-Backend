import { UserEntity } from "src/user/user.entity";
import { WaterSampleEntity } from "src/waterSamples/waterSample.entity";

export const latestParamValues = (user:UserEntity):WaterSampleEntity =>{
    const latestParamValues = new WaterSampleEntity()
        latestParamValues.temperature = user.waterResults[-1].temperature
        latestParamValues.salinity = user.waterResults[-1].salinity
        latestParamValues.ammonia = user.waterResults[-1].ammonia
        latestParamValues.nitrite = user.waterResults[-1].nitrite
        latestParamValues.nitrate = user.waterResults[-1].nitrate
        latestParamValues.phosphate = user.waterResults[-1].phosphate
        latestParamValues.alkalinity = user.waterResults[-1].alkalinity
        latestParamValues.calcium = user.waterResults[-1].calcium
        latestParamValues.magnesium=user.waterResults[-1].magnesium
  
    return latestParamValues
}

export const averageParamValues = (user:UserEntity):WaterSampleEntity=>{
    const averageParamValues = new WaterSampleEntity()
        for(const;)

        return averageParamValues
}

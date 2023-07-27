export enum Component {
    "Aluminum" = "Aluminum",
    "Ammunition M" = "Ammunition M",
    "Ammunition S" = "Ammunition S",
    "Conductor" = "Conductor",
    "Copper" = "Copper",
    "Crystal" = "Crystal",
    "Electro Magnet" = "Electro Magnet",
    "Electromagnetic Charge" = "Electromagnetic Charge",
    "Energy Cell" = "Energy Cell",
    "Energy Container" = "Energy Container",
    "Energy Inverter" = "Energy Inverter",
    "Energy Tube" = "Energy Tube",
    "Explosive Charge" = "Explosive Charge",
    "Force Generator" = "Force Generator",
    "Fuel" = "Fuel",
    "Gauss Rail" = "Gauss Rail",
    "Gold" = "Gold",
    "High Capacity Lens" = "High Capacity Lens",
    "High Pressure Tube" = "High Pressure Tube",
    "Industrial Tesla Coil" = "Industrial Tesla Coil",
    "Laser Compressor" = "Laser Compressor",
    "Laser Head" = "Laser Head",
    "Laser Modulator" = "Laser Modulator",
    "Lead" = "Lead",
    "Military Tesla Coil" = "Military Tesla Coil",
    "Nanobot" = "Nanobot",
    "Plasma Cell" = "Plasma Cell",
    "Power Unit" = "Power Unit",
    "Rocket" = "Rocket",
    "Servo" = "Servo",
    "Steel" = "Steel",
    "Steel Tube" = "Steel Tube",
    "Targeting Card" = "Targeting Card",
    "Transformator" = "Transformator",
    "Warhead" = "Warhead",
    "Wire" = "Wire",
    "Zinc" = "Zinc"
}

export enum ComponentSeller {
    "Turret Factory Supplier" = "Turret Factory Supplier",
    "Turret Factory" = "Turret Factory",
    "Aluminum Mine" = "Aluminum Mine",
    "Ammunition Factory" = "Ammunition Factory",
    "Conductor Factory" = "Conductor Factory",
    "Copper Mine" = "Copper Mine",
    "Planetary Trading Post" = "Planetary Trading Post",
    "Crystal Farm" = "Crystal Farm",
    "Electro Magnet Factory" = "Electro Magnet Factory",
    "Electromagnetic Charge Factory" = "Electromagnetic Charge Factory",
    "Solar Power Plant" = "Solar Power Plant",
    "Energy Container Factory" = "Energy Container Factory",
    "Energy Inverter Factory" = "Energy Inverter Factory",
    "Energy Tube Factory" = "Energy Tube Factory",
    "Explosive Charge Factory" = "Explosive Charge Factory",
    "Force Generator Factory" = "Force Generator Factory",
    "Fuel Factory" = "Fuel Factory",
    "Gauss Rail Factory" = "Gauss Rail Factory",
    "Noble Metal Mine" = "Noble Metal Mine",
    "High Capacity Lens Factory" = "High Capacity Lens Factory",
    "High Pressure Tube Factory" = "High Pressure Tube Factory",
    "Tesla Coil Factory" = "Tesla Coil Factory",
    "Laser Compressor Factory" = "Laser Compressor Factory",
    "Laser Head Factory" = "Laser Head Factory",
    "Laser Modulator Factory" = "Laser Modulator Factory",
    "Lead Mine" = "Lead Mine",
    "Nanobot Factory" = "Nanobot Factory",
    "Plasma Cell Factory" = "Plasma Cell Factory",
    "Power Unit Factory" = "Power Unit Factory",
    "Rocket Factory" = "Rocket Factory",
    "Servo Factory" = "Servo Factory",
    "Steel Factory" = "Steel Factory",
    "Steel Tube Factory" = "Steel Tube Factory",
    "Computer Component Factory" = "Computer Component Factory",
    "Targeting Card Factory" = "Targeting Card Factory",
    "Transformator Factory" = "Transformator Factory",
    "Warhead Factory" = "Warhead Factory",
    "Wire Manufacturer" = "Wire Manufacturer",
    "Zinc Mine" = "Zinc Mine",
}

type IComponentInfo = {
    [key in Component]: {
        price: number;
        volume: number;
        illegal: boolean;
        dangerous: boolean;
        soldBy: ComponentSeller[];
    }
}

export const ComponentInfo: IComponentInfo = {
    "Aluminum": {
        price: 200,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Aluminum Mine"]]
    },
    "Ammunition M": {
        price: 422,
        volume: 1.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Ammunition Factory"]]
    },
    "Ammunition S": {
        price: 422,
        volume: 0.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Ammunition Factory"]]
    },
    "Conductor": {
        price: 168,
        volume: 0.15,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Conductor Factory"]]
    },
    "Copper": {
        price: 350,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Copper Mine"], ComponentSeller["Planetary Trading Post"]]
    },
    "Crystal": {
        price: 190,
        volume: 1.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Crystal Farm"]]
    },
    "Electro Magnet": {
        price: 483,
        volume: 0.75,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Electro Magnet Factory"]]
    },
    "Electromagnetic Charge": {
        price: 13985,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Electromagnetic Charge Factory"]]
    },
    "Energy Cell": {
        price: 50,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Solar Power Plant"]]
    },
    "Energy Container": {
        price: 1087,
        volume: 4.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Energy Container Factory"]]
    },
    "Energy Inverter": {
        price: 1277,
        volume: 3,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Energy Inverter Factory"]]
    },
    "Energy Tube": {
        price: 2895,
        volume: 1.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Energy Tube Factory"]]
    },
    "Explosive Charge": {
        price: 1423,
        volume: 1.5,
        illegal: false,
        dangerous: true,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Explosive Charge Factory"]]
    },
    "Force Generator": {
        price: 49576,
        volume: 4,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Force Generator Factory"]]
    },
    "Fuel": {
        price: 1232,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Fuel Factory"]]
    },
    "Gauss Rail": {
        price: 7735,
        volume: 2,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Gauss Rail Factory"]]
    },
    "Gold": {
        price: 600,
        volume: 0.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Noble Metal Mine"], ComponentSeller["Planetary Trading Post"]]
    },
    "High Capacity Lens": {
        price: 4689,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["High Capacity Lens Factory"]]
    },
    "High Pressure Tube": {
        price: 1650,
        volume: 2,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["High Pressure Tube Factory"]]
    },
    "Industrial Tesla Coil": {
        price: 10314,
        volume: 5.5,
        illegal: false,
        dangerous: true,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Tesla Coil Factory"]]
    },
    "Laser Compressor": {
        price: 6577,
        volume: 1.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Laser Compressor Factory"]]
    },
    "Laser Head": {
        price: 4690,
        volume: 2,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Laser Head Factory"]]
    },
    "Laser Modulator": {
        price: 16742,
        volume: 3,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Laser Modulator Factory"]]
    },
    "Lead": {
        price: 200,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Lead Mine"], ComponentSeller["Planetary Trading Post"]]
    },
    "Military Tesla Coil": {
        price: 10314,
        volume: 4.5,
        illegal: false,
        dangerous: true,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Tesla Coil Factory"]]
    },
    "Nanobot": {
        price: 1338,
        volume: 0.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Nanobot Factory"]]
    },
    "Plasma Cell": {
        price: 174,
        volume: 0.25,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Plasma Cell Factory"]]
    },
    "Power Unit": {
        price: 1211,
        volume: 5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Power Unit Factory"]]
    },
    "Rocket": {
        price: 11250,
        volume: 4,
        illegal: false,
        dangerous: true,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Rocket Factory"]]
    },
    "Servo": {
        price: 1387,
        volume: 0.25,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Servo Factory"]]
    },
    "Steel": {
        price: 277,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Steel Factory"]]
    },
    "Steel Tube": {
        price: 704,
        volume: 3,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Steel Tube Factory"]]
    },
    "Targeting Card": {
        price: 11873,
        volume: 0.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Computer Component Factory"], ComponentSeller["Targeting Card Factory"]]
    },
    "Transformator": {
        price: 209,
        volume: 0.2,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Transformator Factory"]]
    },
    "Warhead": {
        price: 5630,
        volume: 3,
        illegal: false,
        dangerous: true,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Warhead Factory"]]
    },
    "Wire": {
        price: 95,
        volume: 0.5,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Wire Manufacturer"]]
    },
    "Zinc": {
        price: 250,
        volume: 1,
        illegal: false,
        dangerous: false,
        soldBy: [ComponentSeller["Turret Factory"], ComponentSeller["Turret Factory Supplier"], ComponentSeller["Zinc Mine"]]
    },
}

export const Turret = {
    "Chaingun": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Steel Tube"],
            Component["Ammunition S"],
            Component["Steel"],
            Component["Aluminum"],
            Component["Lead"],
        ]
    },
    "Bolter": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["High Pressure Tube"],
            Component["Ammunition M"],
            Component["Explosive Charge"],
            Component["Steel"],
            Component["Aluminum"],
        ]
    },
    "Laser": {
        version: "2.3.1",
        components: [
            Component["Laser Head"],
            Component["Laser Compressor"],
            Component["High Capacity Lens"],
            Component["Laser Modulator"],
            Component["Power Unit"],
            Component["Steel"],
            Component["Crystal"],
        ]
    },
    "Plasma Gun": {
        version: "2.3.1",
        components: [
            Component["Plasma Cell"],
            Component["Energy Tube"],
            Component["Conductor"],
            Component["Energy Container"],
            Component["Power Unit"],
            Component["Steel"],
            Component["Crystal"],
        ]
    },
    "Cannon": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Warhead"],
            Component["High Pressure Tube"],
            Component["Explosive Charge"],
            Component["Steel"],
            Component["Wire"],
        ]
    },
    "Rocket Launcher": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Rocket"],
            Component["High Pressure Tube"],
            Component["Fuel"],
            Component["Targeting Card"],
            Component["Steel"],
            Component["Wire"],
        ]
    },
    "Railgun": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Electromagnetic Charge"],
            Component["Electro Magnet"],
            Component["Gauss Rail"],
            Component["High Pressure Tube"],
            Component["Steel"],
            Component["Copper"],
        ]
    },
    "Repair Laser": {
        version: "2.3.1",
        components: [
            Component["Nanobot"],
            Component["Transformator"],
            Component["Laser Modulator"],
            Component["Conductor"],
            Component["Gold"],
            Component["Steel"],
        ]
    },
    "Purifying Mining Laser": {
        version: "2.3.1",
        components: [
            Component["Laser Compressor"],
            Component["Laser Modulator"],
            Component["High Capacity Lens"],
            Component["Conductor"],
            Component["Steel"],
        ]
    },
    "R-Mining Laser": {
        version: "2.3.1",
        components: [
            Component["Laser Compressor"],
            Component["Laser Modulator"],
            Component["High Capacity Lens"],
            Component["Conductor"],
            Component["Steel"],
        ]
    },
    "Purifying Salvaging Laser": {
        version: "2.3.1",
        components: [
            Component["Laser Compressor"],
            Component["Laser Modulator"],
            Component["High Capacity Lens"],
            Component["Conductor"],
            Component["Steel"]
        ]
    },
    "R-Salvaging Laser": {
        version: "2.3.1",
        components: [
            Component["Laser Compressor"],
            Component["Laser Modulator"],
            Component["High Capacity Lens"],
            Component["Conductor"],
            Component["Steel"]
        ]
    },
    "Force Turret": {
        version: "2.3.1",
        components: [
            Component["Force Generator"],
            Component["Energy Tube"],
            Component["Conductor"],
            Component["Steel"],
            Component["Zinc"],
        ]
    },
    "Tesla": {
        version: "2.3.1",
        components: [
            Component["Industrial Tesla Coil"],
            Component["Electromagnetic Charge"],
            Component["Energy Inverter"],
            Component["Conductor"],
            Component["Power Unit"],
            Component["Copper"],
            Component["Energy Cell"],
        ]
    },
    "Lightning": {
        version: "2.3.1",
        components: [
            Component["Military Tesla Coil"],
            Component["High Capacity Lens"],
            Component["Electromagnetic Charge"],
            Component["Conductor"],
            Component["Power Unit"],
            Component["Copper"],
            Component["Energy Cell"],
        ]
    },
    "Pulse Cannon": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Steel Tube"],
            Component["Ammunition S"],
            Component["Steel"],
            Component["Copper"],
            Component["Energy Cell"],
        ]
    },
    "Point-Defense Cannon": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Steel Tube"],
            Component["Ammunition S"],
            Component["Steel"],
            Component["Aluminum"],
            Component["Lead"]
        ]
    },
    "Point-Defense Laser": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["Laser Head"],
            Component["Laser Compressor"],
            Component["High Capacity Lens"],
            Component["Laser Modulator"],
            Component["Steel"],
            Component["Crystal"]
        ]
    },
    "Flak/Anti-Fighter cannon": {
        version: "2.3.1",
        components: [
            Component["Servo"],
            Component["High Pressure Tube"],
            Component["Ammunition M"],
            Component["Explosive Charge"],
            Component["Steel"],
            Component["Aluminum"]
        ]
    }
}

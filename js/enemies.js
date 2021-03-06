const basic = {rendering:{texture:"textures/basic-r.png"},};
const basic_rush = {
	physics:{
		thrust:0.000001,
		thrustMode:"exponential"
	},
	rendering:{texture:"textures/basic.png"},
}
const pilot = {
	rendering:{texture:"textures/pilot.png"},
	physics:{
		thrust:0.000001,
		thrustMode:"exponential"
	},
	collision:{
		wall:{
			trigger:false
		},
		player:{
			damageAmount: 10
		}
	},
	other:{
		dieScore:10,
		color:[256,0,0]
	}
}
const shooter = {
	rendering:{texture:"textures/shooter.png"},
	battle:{shooting:{trigger:true}},
	collision:{
		player:{
			trigger:false
		}
	},
	physics:{
		thrustMode:"exponential",
		thrust:0.000005
	},
	other:{
		dieScore:50,
		color:[0,256,0]
	},
	orbit:{
		trigger:true
	}
}
const orbiter = {
	rendering:{
		texture:"textures/shooter.png",
		size:15
	},
	battle:{
		shooting: {
			trigger:true,
			shootRate:50,
			bulletAtk:3,
			bulletSpeed:7,
			bulletSize:3,
			shootAngles:[-15,15,0],
			bulletParticles:{
				color:[256,0,0],
				lifeSpan:5,
				count:1,
				scale:1,
				size:3,
				randomNess:0.1
			}
		}
	},
	collision:{
		player:{
			trigger:false
		},
		enemies:{
			trigger:false
		}
	},
	physics:{
		thrustMode:"exponential",
		thrust:0.000001,
		rotation:{
			playerAccuracy:1,
			inertia:59
		}
	},
	other:{
		dieScore:100,
		color:[0,256,0]
	},
	orbit:{
		trigger:false
	},
	AI:{
		target:"playerOrbit",
		drawTarget: false
	}
}

const plasma = {
	rendering:{
		texture:"https://cdn.discordapp.com/attachments/425702620028731395/507634735607185408/black_hole_good_animation.gif",
		size:300,
		opacity:0.5
	},
	physics:{
		thrust:0.003
	},
	other:{
		dieScore:2000,
		color:[256,256,256]
	},
	collision:{
		wall:{
			trigger:true
		},
		player:{
			trigger:false
		}
	},
	AI:{
		target:"playerOrbit",
		drawTarget: true
	},
	orbit:{
		trigger:true,
		playerEmissive:-5,
		playerForceZone:1000,
		enemyEmissive:0,
		enemyForceZone:100
	}
}

const tank = {
	rendering:{
		size:50,
		texture:"textures/tank.png"
	},
	collision:{
		player:{
			trigger:false
		},
		enemies:{
			trigger:false
		}
	},
	physics:{
		rotation:{
			playerAccuracy:1,
			inertia:59
		},
		thrust:0.1,
		thrustMode:"linear",
		mass:10,
		collisionCoeficient:0.75
	},
	other:{
		dieScore:750,
		color:[128,256,200]
	},
	battle:{
		hp:100,
		shooting: {
			trigger:true,
			shootMode:"random",
			shootRate:500,
			bulletAtk:50,
			bulletSpeed:3,
			bulletSize:10,
			shootAngles:[0,90,180,270],
			wallCollision:false
		}
	}
}
const core = {
	rendering:{texture:"textures/core.png",size:40},
	battle:{
		hp:75,
		shooting:{
			trigger:true,
			shootMode:"timed",
			shootRate:20,
			bulletAtk:3,
			bulletSpeed:21,
			bulletSize:10,
			shootAngles:[0],
			bulletParticles:{
				color:[0,0,256],
				lifeSpan:5,
				count:3,
				scale:1,
				size:5,
				randomNess:1
			},
			wallCollision:true
		}
	},
	collision:{
		player:{
			trigger:false
		}
	},
	physics:{
		thrustMode:"linear",
		thrust:0.2
	},
	orbit:{
		trigger:true
	},
	AI:{
		target:"playerOrbit",
		drawTarget: false
	},
	other:{
		dieScore:1000,
		color:[0,256,0]
	}
}
const healer = {
	rendering:{
		texture:"textures/healer.png",
		size:25
	},
	healing:{
		trigger:true,
		count:3
	},
	other:{
		dieScore:2000,
		color:[0,256,0]
	},
	collision:{
		player:{
			trigger:false
		}
	},
	battle:{
		hp:200
	},
	orbit:{
		trigger:true
	}
}
const laserer = {
	rendering:{
		size:50,
		texture:"textures/ls.png"
	},
	collision:{
		player:{
			trigger:false
		},
		enemies:{
			trigger:false
		}
	},
	laser:{
		trigger:true
	},
	other:{
		dieScore:4000
	},
	battle:{
		hp:100
	},
	physics:{
		rotation:{
			playerAccuracy:1,
			inertia:59
		},
		thrustMode:"directional"
	},
	orbit:{
		trigger:true
	}
}
const packs = [{
	components:[[
		{
			blueprint:tank,
			count:5
		},
		{
			blueprint:healer,
			count:5
		}
	]],
    spawnScore:100000
},{
	components:[[
		{
			blueprint:basic,
			count:2
		},
		{
			blueprint:basic_rush,
			count:2
		},
		{
			blueprint:pilot,
			count:5
		},
		{
			blueprint:orbiter,
			count:7
		},
		{
			blueprint:shooter,
			count:3
		},
		{
			blueprint:laserer,
			count:2
		},
		{
			blueprint:healer,
			count:1
		},
		{
			blueprint:core,
			count:2
		},
		{
			blueprint:tank,
			count:1
		}
	]],
    spawnScore:35000
},{
	components:[[
		{
			blueprint:core,
			count:2
		},
		{
			blueprint:tank,
			count:1
		}
	]],
    spawnScore:20000
},{
	components:[[
		{
			blueprint:laserer,
			count:1
		}
	]],
    spawnScore:10000
},{
	components:[[
		{
			blueprint:healer,
			count:1
		}
	]],
    spawnScore:4900
},{
	components:[[
		{
			blueprint:core,
			count:1
		}
	]],
    spawnScore:2100
},{
	components:[[
		{
			blueprint:tank,
			count:1
		}
	]],
    spawnScore:1000
},{
	components:[[
		{
			blueprint:shooter,
			count:1
		}
	],[
		{
			blueprint:orbiter,
			count:5
		}
	]],
    spawnScore:200
},{
	components:[[
		{
			blueprint:shooter,
			count:1
		}
	]],
    spawnScore:100
},{
	components:[[
		{
			blueprint:pilot,
			count:1
		}
	]],
    spawnScore:20
},{
	components:[[
		{
			blueprint:basic,
			count:1
		}
	],[
		{
			blueprint:basic_rush,
			count:1
		}
	]],
    spawnScore:5
}]; 

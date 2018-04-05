
car = {};
{
car.model = model = 'bmw'
car.seria = seria = '318i';
}
bodyType = {};
{
  bodyType.BodyType = 'Coupe'
}
carClass = {};{
carClass.color = 'black'
}
horsePerSecond = {};
{
  horsePerSecond.HP = 444;
}
weight = {};
{
  weight.Weight = '1617 kg';
}


var b = Object.assign ({}, car, carClass, horsePerSecond, weight, bodyType)
console.log (b)

let Min = prompt('min:');
let Max = prompt('max:');
let Current = prompt('current:');
if(Current >= Min && Current <= Max)
{
    console.log(Current);
}
// Bonus
if(Min > Max)
{
    console.error('Min is greater than max.');
}
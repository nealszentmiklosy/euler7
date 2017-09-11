//find 10001st prime number
function isPrime(input){
	for(i=2;i<input;i++){
		if(input%i==0){
			return false
		}
	}
	return true
}
let value = 31
console.log(isPrime(value))
	
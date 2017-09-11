//find 10001st prime number
function isPrime(input){
	for(i=2;i<input;i++){
		if(input%i==0){
			return false
		}
	}
	return true
}
let check=2;
for(j=0;j!=10001;j++){
	if(isPrime(check)==false){
		j=j-1
	}
	check++
}
console.log(check-1)
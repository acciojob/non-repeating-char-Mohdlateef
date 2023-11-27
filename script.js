function firstNonRepeatedChar(str) {
 // Write your code here
	let flag=0;
	for (let i = 0;i<str.length-1;i++) {
		{
			for(let j=i+1;j<str.length;i++)
				{
					if(str.charAt[i]==str.charAt[j])
					{
						flag=1;
						break;
					}
				}
			if(flag==0)
			{
				return str.charAt[i];
			}
		}
		return null;
	}
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

#include <iostream>
#include <vector>
using namespace std;

    
int main() {
    vector<int> arr = {1,2,4,5,3,7};
    for(int i = 0;i<arr.size();i++){
      int minidx = i;
      for(int j = i+1;j<arr.size()-1;j++){
        if(arr[j] < arr[minidx]){
          minidx = j;
        }
      }
      swap(arr[i],arr[minidx]);
    }
    
    for(int num : arr){
      cout << num << " "; 
    }
    return 0;
}

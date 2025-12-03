#include <iostream>
using namespace std;

class QUEUE {
private:
    int arr[100];
    int cap;
    int left;   // front
    int right;  // rear

public:

    QUEUE(int size) {
        cap = size;
        left = -1;
        right = -1;
    }

    void push(int x) {
        if (right == cap - 1) {
            cout << "Queue Overflow" << endl;
            return;
        }

        // first push
        if (left == -1) {
            left = 0;
        }

        arr[++right] = x;
        cout << "pushed into queue " << x << endl;
    }

    void pop() {
        if (left == -1 || left > right) {
            cout << "Queue Underflow" << endl;
            return;
        }

        int popped = arr[left++];
        cout << "popped from queue " << popped << endl;

        // reset after empty
        if (left > right) {
            left = -1;
            right = -1;
        }
    }

    void print() {
        if (left == -1) {
            cout << "Queue is empty" << endl;
            return;
        }

        cout << "Queue elements: ";
        for (int i = left; i <= right; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    QUEUE q(5);

    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);
    q.push(50);
    q.push(60);   // overflow

    q.pop();
    q.pop();

    q.print();
    return 0;
}

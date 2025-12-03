#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int value){
        data = value;
        next = nullptr;
    }
};

class CircularLinkedList {
private:
    Node* head;
    Node* tail;

public:
    CircularLinkedList(){
        head = nullptr;
        tail = nullptr;
    }

    // Insert at end
    void append(int value){
        Node* newNode = new Node(value);

        if(head == nullptr){
            head = newNode;
            tail = newNode;
            tail->next = head;
            return;
        }

        tail->next = newNode;
        tail = newNode;
        tail->next = head;
    }

    // Insert at a specific position (1-based index)
    void insertAtPosition(int value, int position){
        Node* newNode = new Node(value);

        if(position == 1){
            if(head == nullptr){
                head = newNode;
                tail = newNode;
                tail->next = head;
            } else {
                newNode->next = head;
                head = newNode;
                tail->next = head;
            }
            return;
        }

        Node* temp = head;
        int count = 1;

        while(count < position - 1 && temp != tail){
            temp = temp->next;
            count++;
        }

        // Insert in between or at end
        newNode->next = temp->next;
        temp->next = newNode;

        if(temp == tail)
            tail = newNode;
    }

    // Delete node at position (1-based index)
    void deleteAtPosition(int position){
        if(head == nullptr){
            cout << "List is empty" << endl;
            return;
        }

        Node* current = head;

        // Case: delete head
        if(position == 1){
            if(head == tail){
                delete head;
                head = tail = nullptr;
            } else {
                head = head->next;
                tail->next = head;
                delete current;
            }
            return;
        }

        Node* prev = nullptr;
        int count = 1;

        while(count < position && current != tail){
            prev = current;
            current = current->next;
            count++;
        }

        // Node does not exist
        if(count < position){
            cout << "Position out of range" << endl;
            return;
        }

        // Remove node
        prev->next = current->next;

        // If tail is deleted, update tail
        if(current == tail)
            tail = prev;

        delete current;
    }

    // Display list
    void display(){
        if(head == nullptr){
            cout << "List is empty" << endl;
            return;
        }

        Node* temp = head;
        do{
            cout << temp->data << " → ";
            temp = temp->next;
        } while(temp != head);

        cout << "(head)" << endl;
    }
};

int main(){
    CircularLinkedList list;

    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);

    list.display();

    list.insertAtPosition(15, 2);
    list.display();

    list.deleteAtPosition(3);
    list.display();

    list.insertAtPosition(5, 1);
    list.display();

    list.deleteAtPosition(5);
    list.display();

    return 0;
}

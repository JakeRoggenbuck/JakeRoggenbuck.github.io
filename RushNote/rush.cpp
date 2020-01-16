#include <cstdio>
#include <iostream>
#include <fstream>
using namespace std;

void add(const char* input) {
	//Gets date information for save-file entry
	time_t now = time(0);
	tm *ltm = localtime(&now);
	//Opens file to be righten to 
    ofstream myfile;
    myfile.open ("/usr/share/rushnote/rushnote.txt",ios::app);
	//Gets parameter passed to add function
	string output = input;
	//Adds characters and date information to save-file along with the parameter input 
    myfile << "[ ] (" << ltm->tm_mday << "/" << 1 + ltm->tm_mon << "/" << ltm->tm_year - 100 << "): " << output << endl;
	myfile.close();
}

void show() {
	string line;
	//Reads text file
  	ifstream savefile ("/usr/share/rushnote/rushnote.txt");
	//Loops through all lines in save-file
	while (getline (savefile,line)) {
		//Outputs the line
     	cout << line << endl;
    }
    savefile.close();
}

void edit() {
	//Opens save-file in $EDITOR
    system("$EDITOR /usr/share/rushnote/rushnote.txt");
}

int main(int argc, char* argv[]) {
	//Gets arguments passed from command line
    const char* arg1 = argv[1];
	//Gets the first flag (command flag)
    string firstFlag = arg1;
	
	//Checks if the flag is -a for add
    if (firstFlag == "-a") {
		//Gets argument 2 (data to add to save-file)
        const char* arg2 = argv[2];
        const char* inputFlag = arg2;
		//Passes the input to add function
        add(inputFlag); 
	
	//Checks for flag -s
    } else if (firstFlag == "-s") {
        show();
    
    } else if (firstFlag == "-e") {
        edit();

    } else cout << "Not a command, look at manual for command information" << endl;

    return 0;
}


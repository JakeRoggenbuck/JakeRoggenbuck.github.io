CC=g++

make: rush.cpp
	$(CC) -o /bin/rushnote rush.cpp

install:
	cp rushnote.1 /usr/share/man/man1/rushnote.1
	gzip /usr/share/man/man1/rushnote.1
	mkdir /usr/share/rushnote
	echo "RushNote save file" > /usr/share/rushnote/rushnote.txt
	chmod 777 /usr/share/rushnote/rushnote.txt


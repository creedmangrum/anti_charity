if [ -f "/tmp/jenkins/anti_charity/bin/activate" ]; then
    echo "**> virtualenv exists"
else
    echo "**> creating virtualenv"
    virtualenv -p /usr/bin/python27 /tmp/jenkins/anti_charity
fi
source /tmp/jenkins/anti_charity/bin/activate

pip install -r requirements.txt

nosetests --with-xunit --with-coverage --cover-package=app --cover-erase
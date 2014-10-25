import subprocess, StringIO, csv
from simplejson import dumps
from firebase import Firebase
from time import sleep, time

firebase = Firebase('https://<your_app>.firebaseio.com/stations')

def fetch_data():
        # get the newest capture.csv file, then use awk to get only Station data
        cmd = r"cat /tmp/`ls -Art /tmp | grep capture | tail -n 1` | awk '/Station/{y=1;next}y'"
        data = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout.read()
        f = StringIO.StringIO(data)
        # convert the data to a list of dict() objects
        conv = lambda row: {'station_mac':row[0], 'first_time_seen':row[1], 'last_time_seen':row[2], 'power':row[3]}
        data = [row for row in csv.reader(f, delimiter=',') if len(row) != 0]
        return [conv(row) for row in data] 

while True:
        print firebase.put(fetch_data())
        sleep(1)

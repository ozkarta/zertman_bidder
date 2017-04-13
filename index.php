<?php



use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;


use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;


require __DIR__ . '/vendor/autoload.php';


//include __DIR__ . '/bidder/dist/index.html';


class Chat implements MessageComponentInterface {

    protected $clients;

     public function __construct() {
        $this->clients = new \SplObjectStorage;
     }


    public function onOpen(ConnectionInterface $conn) {
        error_log( 'WS opened___ changed');

        //  inaxavs  yvela axal daconectebul users
        $this->clients->attach($conn);


    }

    public function onMessage(ConnectionInterface $from, $msg) {
        error_log( 'WS new message');

        error_log($msg);

        $message = json_decode($msg);

        $bidder = $message->{"bidder"};
        $ammount = $message->{"bidAmmount"};
        $slotGUID = $message->{"slotGUID"};

        error_log($bidder);
        error_log($ammount);
        error_log($slotGUID);

        $result = $this->insertBidToDB($bidder, $ammount, $slotGUID);


        foreach ($this->clients as $client) {
            //if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($result);
            //}
        }

    }

    public function onClose(ConnectionInterface $conn) {
        error_log( 'WS closed');

        //  washlis    users roca connection agar ikneba
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
    }



    //_____________________________________________________________

    private function insertBidToDB($bidder, $ammount, $slotGUID){

        $sql = "INSERT INTO bids  (bidGUID, slotGUID,  bidder, bidAmmount) VALUES (UUID(),'".$slotGUID."','".$bidder."',".$ammount.")";

        error_log($sql);


        $conn = new mysqli('localhost', 'root', '','zertman_bidder');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        if ($conn->query($sql) === TRUE) {
            error_log( "New record created successfully");
        } else {
            error_log("Error: " . $sql . "<br>" . $conn->error);
        }

        //  Sellecting  latest  record after    insert
        $sqlSelect = "SELECT * FROM bids WHERE slotGUID='".$slotGUID."' order by effDate  desc limit 1";


        $result = $conn->query($sqlSelect);
        $res;


        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $res =  json_encode($row);
                break;
            }
        } else {
            $conn->close();
            $res =  json_encode(400);
        }

        $conn->close();
        
        return $res;


    }
}


    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                new Chat()
            )
        ),
        8080
    );

    $server->run();
?>

<h1>Hello, This is WebSocket server using  Ratchet.IO</h1>
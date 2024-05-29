<?php
$database = new SQLite3('jogadores.db');

if(!$database) {
    echo $database->lastErrorMsg();
} else {
    
    $result = $database->query('SELECT * FROM Jogadores');
    
    $jogadores = array();

    while ($row = $result->fetchArray()) {
        $jogadores[] = $row['nome'];
    }

    $database->close();
}
?>

### Theory

The Transmission Control Protocol (TCP) is a reliable, connection-oriented protocol that operates at the Transport Layer of the OSI (Open Systems Interconnection) model. TCP provides a reliable, ordered, and error-checked delivery of data between applications running on hosts.

When two entities (e.g., two computers) want to communicate using TCP, they must first establish a connection through a three-way handshake. The three-way handshake involves the following steps:

1. The first entity (the client) sends a SYN (synchronize) message to the second entity (the server) to request a connection.

2. The server responds with a SYN-ACK (synchronize-acknowledge) message to acknowledge the request and also to request a connection from the client.

3. The client then responds with an ACK (acknowledge) message to acknowledge the server's request, and the connection is established.

Once the connection is established, data can be exchanged between the two entities. The data is divided into packets, numbered sequentially, and sent in order. TCP ensures that the packets are delivered reliably by performing the following functions:

1. Segmenting data: TCP divides data into smaller segments to fit the maximum transmission unit (MTU) size of the network.

2. Adding a sequence number: TCP assigns a sequence number to each segment to ensure that they are delivered in the correct order.

3. Adding an acknowledgement number: The receiving entity sends an acknowledgment (ACK) message with an acknowledgement number indicating the next expected sequence number.

4. Retransmission of lost packets: If a segment is not acknowledged, TCP retransmits the segment until it is acknowledged.

5. Flow control: TCP uses a sliding window mechanism to regulate the flow of data between the sender and receiver, preventing data overload on the receiver side.

6. Congestion control: TCP detects network congestion and adjusts its transmission rate to reduce the load on the network.

When the data transmission is complete, TCP performs a four-way handshake to close the connection:

1. The client sends a FIN (finish) message to the server indicating that it has finished sending data.

2. The server acknowledges the FIN message with an ACK message and sends its own FIN message to indicate that it has also finished sending data.

3. The client acknowledges the server's FIN message with an ACK message.

4. The connection is closed, and the resources allocated for the connection are released.

In summary, TCP provides reliable, ordered, and error-checked delivery of data between applications running on hosts by establishing a connection, dividing data into packets, numbering them sequentially, and performing various functions such as retransmission, flow control, and congestion control.

![fig1](/experiment/images/fig1.jpg)
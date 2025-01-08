import ballerina/http;
import ballerina/lang.regexp;
import ballerina/random;
import ballerina/io;

listener http:Listener userListener = new (8080);


type User record {
    int id;
    string name;
    string email;
};

service /users/v1 on userListener {
    resource function get users/[string email]() returns User|error {
        io:print("test");
        return {
            id: check random:createIntInRange(1, 100),
            name: string:toUpperAscii(email.substring(0,1)).concat((regexp:split(re `@`, email)[0]).substring(1)),
            email: email
        };
    }
}

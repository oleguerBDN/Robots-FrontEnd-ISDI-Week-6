import Form from "../Form";
import Robot from "../Robot";

function RobotsMainPage() {
  //https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg
  const robots = [
    {
      features: {
        speed: 7,
        resistance: 8,
        birth: "2021-10-09T00:00:00.000Z",
      },
      _id: "6185993022dd92661d3cfca6",
      name: "pepe",
      img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
    },
    {
      features: {
        speed: 1,
        resistance: 1,
        birth: "1998-10-09T00:00:00.000Z",
      },
      _id: "61859b1a72845edffd042108",
      name: "jose",
      img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      __v: 0,
    },
    {
      features: {
        speed: 1,
        resistance: 1,
        birth: "1998-10-09T00:00:00.000Z",
      },
      _id: "6185a755cee735ee214bc98c",
      name: "herokuu",
      img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      __v: 0,
    },
    {
      features: {
        speed: 1,
        resistance: 1,
        birth: "1998-10-09T00:00:00.000Z",
      },
      _id: "6185a7aacee735ee214bc98f",
      name: "localhost",
      img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      __v: 0,
    },
  ];

  const deleteRobot = () => {};
  const updateRobot = () => {};

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <h1>Wellcome to RobotLand - Oleguer</h1>
        <Form />
        <div className="md:px-4 md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {robots.map((robot) => (
            <Robot
              robot={robot}
              key={robot._id}
              deleteClick={deleteRobot}
              updateClick={updateRobot}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RobotsMainPage;

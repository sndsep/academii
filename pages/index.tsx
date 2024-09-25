import { GetServerSideProps } from 'next';
import AcademyHomePage from '../src/components/Home';
import dbConnect from '../lib/dbConnect';
import { Course, Project, Professor, Staff, User, Review } from '../models';

interface HomeProps {
  courses: any[];
  projects: any[];
  professors: any[];
  staff: any[];
  reviews: any[];
  students: any[];
}

const Home: React.FC<HomeProps> = (props) => {
  return <AcademyHomePage {...props} />;
}

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  await dbConnect();

  try {
    const staff = await Staff.find({}).lean();
    const courses = await Course.find({}).lean();
    const projects = await Project.find({}).populate('studentId').lean();
    const professors = await Professor.find({}).lean();
    const reviews = await Review.find({}).lean();
    const students = await User.find({}).lean();

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
        projects: JSON.parse(JSON.stringify(projects)),
        professors: JSON.parse(JSON.stringify(professors)),
        staff: JSON.parse(JSON.stringify(staff)),
        reviews: JSON.parse(JSON.stringify(reviews)),
        students: JSON.parse(JSON.stringify(students)),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        courses: [],
        projects: [],
        professors: [],
        staff: [],
        reviews: [],
        students: [],
      },
    };
  }
};
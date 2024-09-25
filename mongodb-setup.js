// Conectar a la base de datos
const dbName = 'vfx_academy';
print(`Connecting to database: ${dbName}`);
db = db.getSiblingDB(dbName);

// Función para borrar y recrear una colección
function resetCollection(collectionName) {
  if (db.getCollectionNames().includes(collectionName)) {
    print(`Dropping existing ${collectionName} collection`);
    db[collectionName].drop();
  }
  print(`Creating ${collectionName} collection`);
  db.createCollection(collectionName);
}

// Reiniciar todas las colecciones
resetCollection('courses');
resetCollection('professors');
resetCollection('staff');
resetCollection('projects');
resetCollection('reviews');
resetCollection('students');

// Funciones de generación de datos (debes definir estas funciones)
function generateCourses(count) {
  for (let i = 0; i < count; i++) {
    db.courses.insert({
      name: `Course ${i + 1}`,
      description: `Description for Course ${i + 1}`,
      category: 'Category',
      icon: 'Icon'
    });
  }
}

function generateProfessors(count) {
  for (let i = 0; i < count; i++) {
    db.professors.insert({
      name: `Professor ${i + 1}`,
      specialty: `Specialty ${i + 1}`
    });
  }
}

function generateStaff(count) {
  for (let i = 0; i < count; i++) {
    db.staff.insert({
      name: `Staff ${i + 1}`,
      role: `Role ${i + 1}`
    });
  }
}

function generateProjects(count) {
  for (let i = 0; i < count; i++) {
    db.projects.insert({
      title: `Project ${i + 1}`,
      description: `Description for Project ${i + 1}`,
      image: '/images/placeholder.svg'
    });
  }
}

function generateReviews(count) {
  for (let i = 0; i < count; i++) {
    db.reviews.insert({
      name: `Reviewer ${i + 1}`,
      content: `Review content ${i + 1}`,
      rating: Math.floor(Math.random() * 5) + 1
    });
  }
}

function generateStudents(count) {
  for (let i = 0; i < count; i++) {
    db.students.insert({
      name: `Student ${i + 1}`,
      email: `student${i + 1}@example.com`
    });
  }
}

// Generar datos
try {
  generateCourses(200);
  generateProfessors(20);
  generateStaff(4);
  generateProjects(200);
  generateReviews(30);
  generateStudents(500);
  
  print("Fake data generation complete!");
} catch (e) {
  print("An error occurred during data generation:");
  printjson(e);
}

// Crear índices para mejorar el rendimiento
print("Creating indexes...");
db.courses.createIndex({ name: 1 });
db.professors.createIndex({ name: 1 });
db.students.createIndex({ email: 1 }, { unique: true });
db.projects.createIndex({ student_id: 1 });
db.reviews.createIndex({ course_id: 1 });

print("Database setup complete!");
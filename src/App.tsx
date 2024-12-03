import React, { useState } from 'react';
import { GraduationCap, Github } from 'lucide-react';
import { GradeInput } from './components/GradeInput';
import { calculateFinalGrade } from './utils/calculateGrade';

function App() {
  const [grades, setGrades] = useState({
    avp1: '',
    avp2: '',
    tde1: '',
    tde2: '',
    tde3: '',
    tde4: ''
  });

  const updateGrade = (field: keyof typeof grades) => (value: string) => {
    setGrades(prev => ({ ...prev, [field]: value }));
  };

  const calculateResult = () => {
    const values = Object.values(grades).map(Number);
    if (values.some(isNaN)) return null;
    
    return calculateFinalGrade(
      Number(grades.avp1),
      Number(grades.avp2),
      Number(grades.tde1),
      Number(grades.tde2),
      Number(grades.tde3),
      Number(grades.tde4)
    );
  };

  const result = calculateResult();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Calculadora de Média Final</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <GradeInput
              label="AVP1 (40%)"
              value={grades.avp1}
              onChange={updateGrade('avp1')}
            />
            <GradeInput
              label="AVP2 (40%)"
              value={grades.avp2}
              onChange={updateGrade('avp2')}
            />
          </div>
          <div>
            <GradeInput
              label="TDE1 (5%)"
              value={grades.tde1}
              onChange={updateGrade('tde1')}
            />
            <GradeInput
              label="TDE2 (5%)"
              value={grades.tde2}
              onChange={updateGrade('tde2')}
            />
            <GradeInput
              label="TDE3 (5%)"
              value={grades.tde3}
              onChange={updateGrade('tde3')}
            />
            <GradeInput
              label="TDE4 (5%)"
              value={grades.tde4}
              onChange={updateGrade('tde4')}
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Média Final</h2>
          <div className="text-3xl font-bold text-blue-600">
            {result !== null ? result.toFixed(2) : '---'}
          </div>
          {result !== null && (
            <p className="mt-2 text-sm text-gray-600">
              {result >= 7 
                ? '✨ Parabéns! Você foi aprovado!'
                : '📚 Continue se esforçando!'}
            </p>
          )}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-600">
          <p className="mb-2">Desenvolvido por Matheus Almeida</p>
          <a
            href="https://github.com/Mathsx2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            Ver no GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
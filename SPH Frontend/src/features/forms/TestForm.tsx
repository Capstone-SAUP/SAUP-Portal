import React, { useEffect, useRef, useState } from 'react';
import { generate, Template } from '@pdfme/generator';
import { Designer, Viewer, Form } from '@pdfme/ui';
import { getTemplate, cloneDeep } from './helper';

export default function TestForm(): JSX.Element {
  const designerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const designer = useRef<Designer | null>(null);
  const viewer = useRef<Viewer | null>(null);
  const form = useRef<Form | null>(null);

  const [template, setTemplate] = useState<Template>(getTemplate());
  const [mode, setMode] = useState<'viewer' | 'form'>('form');


  useEffect(() => {
    if (viewerRef.current) {
      viewer.current = new Viewer({
        domContainer: viewerRef.current,
        template,
        inputs: cloneDeep(template.sampledata ?? [{}]),
      });
    }

    if (formRef.current) {
      form.current = new Form({
        domContainer: formRef.current,
        template,
        inputs: cloneDeep(template.sampledata ?? [{}]),
      });

      form.current.onChangeInput(console.log);
    }
  }, [viewerRef, formRef, mode]);


  return (
      <main>
        <div className="w-screen">
          <div className="row">

            <div>
              <ul className="tabs">
                <li
                  onClick={() => setMode('form')}
                  className={`tabs__item ${mode === 'form' ? 'tabs__item--active' : ''}`}
                >
                  Form
                </li>
                <li
                  onClick={() => setMode('viewer')}
                  className={`tabs__item  ${mode === 'viewer' ? 'tabs__item--active' : ''}`}
                >
                  Viewer
                </li>
              </ul>
              {mode === 'form' ? (
                <div style={{ height: 800, background: 'rgb(74, 74, 74)' }} ref={formRef}></div>
              ) : (
                <div style={{ height: 800, background: 'rgb(74, 74, 74)' }} ref={viewerRef}></div>
              )}
            </div>
          </div>
        </div>
      </main>
  );
}